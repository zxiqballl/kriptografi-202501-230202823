// Contract Address - bisa diubah via UI
let CONTRACT_ADDRESS = localStorage.getItem('contractAddress') || null;

// GANTI DENGAN ABI DARI REMIX
const CONTRACT_ABI = [
	{
		"inputs": [],
		"name": "endVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			}
		],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "choice",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "choice",
				"type": "uint256"
			}
		],
		"name": "voter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ya",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tidak",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voteCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingEnded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let signer;
let contract;

// DOM Elements
const connectBtn = document.getElementById('connectBtn');
const walletAddress = document.getElementById('walletAddress');
const voteBtn = document.getElementById('voteBtn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result1Fill = document.getElementById('result1Fill');
const result2Fill = document.getElementById('result2Fill');
const voteLoading = document.getElementById('voteLoading');
const notification = document.getElementById('notification');
const options = document.querySelectorAll('.option');
const contractAddressInput = document.getElementById('contractAddressInput');
const setContractBtn = document.getElementById('setContractBtn');
const currentContract = document.getElementById('currentContract');
const clearCacheBtn = document.getElementById('clearCacheBtn');
const copyContractBtn = document.getElementById('copyContractBtn');
const refreshResultsBtn = document.getElementById('refreshResultsBtn');

let selectedChoice = null;

// Initialize contract display dari localStorage
if (CONTRACT_ADDRESS) {
  currentContract.textContent = CONTRACT_ADDRESS;
  contractAddressInput.value = CONTRACT_ADDRESS;
}

// Copy Contract Address
copyContractBtn.addEventListener('click', () => {
  if (!CONTRACT_ADDRESS) {
    showNotification('Belum ada contract address!', 'error');
    return;
  }
  
  navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
    showNotification('Contract address berhasil dicopy!', 'success');
  }).catch(() => {
    showNotification('Gagal copy contract address', 'error');
  });
});

// Refresh Results Button
refreshResultsBtn.addEventListener('click', () => {
  if (contract) {
    loadResults();
    refreshResultsBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => {
      refreshResultsBtn.style.transform = 'rotate(0deg)';
    }, 600);
  }
});

// Clear Cache
clearCacheBtn.addEventListener('click', () => {
  if (confirm('Yakin ingin menghapus cache? Contract address dan wallet akan direset.')) {
    localStorage.removeItem('contractAddress');
    CONTRACT_ADDRESS = null;
    contract = null;
    signer = null;
    currentContract.textContent = 'Belum diset';
    contractAddressInput.value = '';
    walletAddress.textContent = 'Belum terhubung';
    connectBtn.textContent = 'Hubungkan Wallet';
    voteBtn.disabled = true;
    result1.textContent = '0';
    result2.textContent = '0';
    showNotification('Cache berhasil dihapus!', 'success');
  }
});

// Set Contract Address
setContractBtn.addEventListener('click', () => {
  const address = contractAddressInput.value.trim();
  
  // Validasi format address
  if (!address.startsWith('0x') || address.length !== 42) {
    showNotification('Format address tidak valid! Harus 0x... dengan 42 karakter', 'error');
    return;
  }
  
  CONTRACT_ADDRESS = address;
  localStorage.setItem('contractAddress', address);
  currentContract.textContent = address;
  
  // Reset contract instance
  contract = null;
  
  showNotification('Contract address berhasil diset! Silakan hubungkan wallet.', 'success');
});

// Connect Wallet
connectBtn.addEventListener('click', async () => {
  if (!CONTRACT_ADDRESS) {
    showNotification('Set contract address terlebih dahulu!', 'error');
    return;
  }

  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      walletAddress.textContent = accounts[0];
      connectBtn.textContent = 'Terkoneksi';

      // Setup provider & signer menggunakan ethers v6
      const provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Enable voting button after connection
      voteBtn.disabled = false;
      // Load results
      loadResults();

    } catch (error) {
      showNotification('Gagal menghubungkan wallet: ' + error.message, 'error');
    }
  } else {
    showNotification('Silakan install MetaMask!', 'error');
  }
});

// Select Option
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedChoice = parseInt(option.dataset.choice);
  });
});

// Vote Button
voteBtn.addEventListener('click', async () => {
  if (!selectedChoice) {
    showNotification('Pilih opsi dulu!', 'error');
    return;
  }

  if (!contract) {
    showNotification('Hubungkan wallet terlebih dahulu!', 'error');
    return;
  }

  try {
    // Disable button dan show loading
    voteBtn.disabled = true;
    voteBtn.classList.add('hidden');
    voteLoading.classList.remove('hidden');

    const tx = await contract.voter(selectedChoice);
    await tx.wait();

    // Hide loading dan show button lagi
    voteLoading.classList.add('hidden');
    voteBtn.classList.remove('hidden');
    voteBtn.disabled = false;
    showNotification('Vote berhasil dikirim!', 'success');
    selectedChoice = null;
    options.forEach(opt => opt.classList.remove('selected'));
    loadResults();

  } catch (error) {
    console.error('Error detail:', error);
    
    // Hide loading dan show button lagi
    voteLoading.classList.add('hidden');
    voteBtn.classList.remove('hidden');
    voteBtn.disabled = false;
    
    // Parse error messages untuk user
    let errorMsg = 'Gagal vote: ';
    if (error.code === 'CALL_EXCEPTION') {
      errorMsg += 'Contract tidak valid atau belum di-deploy di network ini';
    } else if (error.code === 'INVALID_ARGUMENT') {
      errorMsg += 'Parameter tidak valid - cek ABI dan contract address';
    } else if (error.reason) {
      errorMsg += error.reason;
    } else {
      errorMsg += error.message;
    }
    
    showNotification(errorMsg, 'error');
  }
});

// Load Results with Progress Bar Animation
async function loadResults() {
  if (!contract) {
    console.warn('Contract belum diinisialisasi');
    return;
  }

  try {
    const [setuju, tolak] = await contract.getResult();
    const setujuNum = setuju.toNumber ? setuju.toNumber() : parseInt(setuju);
    const tolakNum = tolak.toNumber ? tolak.toNumber() : parseInt(tolak);
    const total = setujuNum + tolakNum;
    
    // Calculate percentages
    const setujuPercent = total > 0 ? (setujuNum / total) * 100 : 0;
    const tolakPercent = total > 0 ? (tolakNum / total) * 100 : 0;
    
    // Animate progress bars
    result1Fill.style.width = setujuPercent + '%';
    result2Fill.style.width = tolakPercent + '%';
    
    // Animate numbers
    animateCounter(result1, setujuNum);
    animateCounter(result2, tolakNum);
  } catch (error) {
    console.error('Gagal ambil hasil:', error);
    showNotification('Gagal memuat hasil voting', 'error');
  }
}

// Animate counter
function animateCounter(element, target) {
  const current = parseInt(element.textContent) || 0;
  if (current === target) return;
  
  const increment = Math.ceil((target - current) / 10);
  let value = current;
  
  const timer = setInterval(() => {
    value += increment;
    if (value >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = value;
    }
  }, 30);
}

// Show Notification
function showNotification(message, type) {
  notification.querySelector('p').textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.remove('hidden');

  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}




