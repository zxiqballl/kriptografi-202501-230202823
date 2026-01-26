// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AmankanVoting {
    // data
    address public owner;
    mapping(address => bool) public voters;
    mapping(uint256 => uint256) public voteCount; // 1 = Ya dan 2 = Tidak
    bool public votingEnded = false;

    // event
    event Voted(address indexed voter, uint256 choice);

    // constructor
    constructor() {
        owner = msg.sender;
    }

    // register voter
    function registerVoter(address _voter) external {
        require(msg.sender == owner, "Hanya owner yang berhak mendaftarkan pemilih");
        voters[_voter] = true;
    }

    // voter
    function voter(uint256 choice) external {
        require(!votingEnded, "Voting sudah ditutup");
        require(voters[msg.sender], "Anda bukan pemilih yang terdaftar");
        require(choice == 1 || choice == 2, "Pilih 1 untuk Ya atau 2 untuk Tidak");
        
        voteCount[choice] += 1;
        emit Voted(msg.sender, choice);
    }

    // end voting
    function endVoting() external {
        require(msg.sender == owner, "Hanya owner yang bisa mengakhiri voting");
        votingEnded = true;
    }

    // result
    function getResult() external view returns (uint256 ya, uint256 tidak) {
        return (voteCount[1], voteCount[2]);
    }
}