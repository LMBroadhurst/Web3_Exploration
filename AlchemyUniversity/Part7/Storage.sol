// SPDX-License-Identifier: MIT


contact Storage {
    uint256 x = 100; // Is stored at 0x0
    uint256 y = 100; // Is stored at 0x1

    // keccak256(key + base_slot (0x2))
    mapping(uint => uint) testing; // Stored at 0x2

    // How it maps to storage slots...
    testing[0] = 21; // Stored at (0 + 0x2)
    testing[10] = 42; // Stored at (1 + 0x2)
}