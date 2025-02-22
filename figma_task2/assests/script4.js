function verifyStatus() {
    const status = getStatus(); // Assume getStatus() function is defined elsewhere
    if (status === 'active') {
        console.log('Status is active');
    } else if (status === 'inactive') {
        console.log('Status is inactive');
    } else {
        console.log('Unknown status');
    }
}