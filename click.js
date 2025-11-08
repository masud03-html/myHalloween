document.body.addEventListener('click', function(event) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    
    // Position the spark at the click location
    spark.style.left = event.clientX + 'px';
    spark.style.top = event.clientY + 'px';
    
    // Set a random size for each spark
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';

    document.body.appendChild(spark);

    // Remove the spark after the animation completes
    setTimeout(() => {
        spark.remove();
    }, 500); // Matches the animation duration
});