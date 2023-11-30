document.addEventListener('DOMContentLoaded', function(){
    // Button click event
    document.querySelector('#side-button').addEventListener('click', function(){
        var sidebar = document.querySelector('.sidebar');
        sidebar.style.left = '0px';
    });

        // Click outside event
        // ...

        // Close button click event
        document.querySelector('.close-button').addEventListener('click', function(){
            var sidebar = document.querySelector('.sidebar');
            sidebar.style.left = '-500px';
        });
});