document.addEventListener("DOMContentLoaded", function() {
    // Sample folder data (replace this with your actual data)
    const folderData = [
        {
            name: "test1",
            type:"folder",
            files: ["File1.txt", "File2.jpg"]
        },
        {
            name: "test2.txt",
            type:"txt",
            size:"80kb",
            author:"Zeldoux",
            lastmod:"4 min ago",
            files: ["File3.txt"]
        }
        // Add more folder objects here
    ];

    const fileExplorer = document.querySelector(".File-explorer_content");
    const filesList = fileExplorer.querySelector(".files");

    // Function to generate HTML for files and folders
    function generateHTML(data) {
        let html = "";
        data.forEach(item => {
            if (item.type === "folder") {
                html += `<li class="item" data-type="${item.type}" data-name="${item.name}">
                            <a href="#" data-name="${item.name}">
                                <i class='bx bx-folder bx-lg'></i>
                            </a>
                            <span>${item.name}</span>
                            <span>${item.size}</span>
                            <span>${item.author}</span>
                            <span>${item.lastmod}</span>
                        </li>`;
            } else if (item.type === "txt") {
                html += `<li class="item" data-type="${item.type}" data-name="${item.name}">
                            <a href="#" data-name="${item.name}">
                                <i class='bx bxs-file-txt bx-lg'></i>
                            </a>
                            <span>${item.name}</span>
                            <span>${item.size}</span>
                            <span>${item.author}</span>
                            <span>${item.lastmod}</span>
                        </li>`;
            } else if (item.type === "js") {
                html += `<li class="item" data-type="${item.type}" data-name="${item.name}">
                            <a href="#" data-name="${item.name}">
                                <i class='bx bxs-file-js bx-lg'></i>
                            </a>
                            <span>${item.name}</span>
                        </li>`;
            } else if (item.type === "jpg") {
                html += `<li class="item" data-type="${item.type}" data-name="${item.name}">
                            <a href="#" data-name="${item.name}">
                                <i class='bx bxs-file-image bx-lg'></i>
                            </a>
                            <span>${item.name}</span>
                        </li>`;
            }
            // Add more conditions for other file types as needed
        });
        return html;
        
        return html;
        
    }

    // Function to render files and folders
    function renderFiles(data) {
        filesList.innerHTML = generateHTML(data);
    }

    // Initial rendering of files and folders
    renderFiles(folderData);

    // Add click event listener to handle folder/file click
    filesList.addEventListener("click", function(event) {
        const target = event.target;
        const itemType = target.dataset.type;
        const itemName = target.dataset.name;

        if (itemType === "folder") {
            // Placeholder function to handle opening folders
            openFolder(itemName);
        } else if (itemType === "file") {
            // Placeholder function to handle file actions (open/download)
            openFile(itemName);
        }
    });

    // Placeholder function to handle opening folders
    function openFolder(folderName) {
        // Retrieve folder contents from the server and render them
        // This could involve making an AJAX request to the server
        // and updating the filesList with the contents of the folder
        // For now, let's just log the folder name
        console.log("Opening folder:", folderName);
    }

    // Placeholder function to handle file actions (open/download)
    function openFile(fileName) {
        // Perform the necessary action for opening or downloading the file
        // For now, let's just log the file name
        console.log("Opening file:", fileName);
    }
});