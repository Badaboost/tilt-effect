window.onload = function() {
  console.log("Tilt effect JavaScript file loaded successfully.");

  // List of element selectors you want to apply the tilt effect on
  const columns = [
    '#col-7fiMjf-FyT', '#col-bKyBg7QO2H', '#col-fY6MWL6MP0', '#col-byQfsO__i6',
    '#col-BZKca8k2mc', '#col--HSipCCU8s', '#col-YvnUoyNmBJ', '#col-cqpcVK2ClGb',
    '#col-UCiiXWjOtxX', '#col-sa26pckV4r', '#col-1eiXBWuLHVS'
  ];

  // Iterate through each element and apply the necessary event listeners for the tilt effect
  columns.forEach(columnSelector => {
    const columnElement = document.querySelector(columnSelector);

    // If the element isn't found, log and continue
    if (!columnElement) {
      console.log(`Element not found for selector: ${columnSelector}`);
      return;
    }

    // Add mousemove event listener to achieve the tilt effect
    columnElement.addEventListener('mousemove', (e) => {
      const rect = columnElement.getBoundingClientRect();
      // Calculate tilt amount based on mouse position within the element
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // Adjust sensitivity
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;

      // Apply the transform to tilt the element
      columnElement.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    });

    // Add mouseleave event listener to reset the tilt effect
    columnElement.addEventListener('mouseleave', () => {
      // Reset the transformation to bring the element back to its original state
      columnElement.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });

    // Optionally add a smooth transition for resetting
    columnElement.style.transition = 'transform 0.3s ease-out';
  });
};
