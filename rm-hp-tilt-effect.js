window.onload = function() {
  console.log("JavaScript Loaded");

  const columns = [
    '#col-7fiMjf-FyT', '#col-bKyBg7QO2H', '#col-fY6MWL6MP0', '#col-byQfsO__i6',
    '#col-BZKca8k2mc', '#col--HSipCCU8s', '#col-YvnUoyNmBJ', '#col-cqpcVK2ClGb',
    '#col-UCiiXWjOtxX', '#col-sa26pckV4r', '#col-1eiXBWuLHVS'
  ];

  let atLeastOneFound = false;

  columns.forEach(columnSelector => {
    const columnElement = document.querySelector(columnSelector);

    if (!columnElement) {
      console.log(`Element not found for selector: ${columnSelector}`);
      return;
    }

    atLeastOneFound = true;

    columnElement.addEventListener('mouseenter', function() {
      console.log(`Mouse entered column: ${columnSelector}`);
      columnElement.style.backgroundColor = '#f0f0f0';
    });

    columnElement.addEventListener('mouseleave', function() {
      columnElement.style.backgroundColor = '';
    });
  });

  if (!atLeastOneFound) {
    console.error("No elements found based on provided selectors. Please verify the selectors are correct.");
  }
};
