pragma solidity ^0.8.0;

interface IPActionVeEuphratesStatic {
    function increaseLockPositionStatic(
        address user,
        uint128 additionalAmountToLock,
        uint128 newExpiry
    ) external view returns (uint128 newVeBalance);
}
