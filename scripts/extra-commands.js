document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("user-input");
    const terminalContent = document.getElementById("terminal-content");

    let currentDirectory = ["Home"];

    let commandHistory = [];
let historyIndex = -1;

inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let command = inputElement.value.trim();
        if (command) {
            // Save command to history and reset the index pointer.
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            handleCommand(command);
            inputElement.value = "";
        }
    } else if (event.key === "ArrowUp") {
        // Move back through history
        if (commandHistory.length > 0) {
            historyIndex = Math.max(historyIndex - 1, 0);
            inputElement.value = commandHistory[historyIndex];
        }
        event.preventDefault(); // prevent caret movement
    } else if (event.key === "ArrowDown") {
        // Move forward through history
        if (commandHistory.length > 0) {
            historyIndex = Math.min(historyIndex + 1, commandHistory.length);
            if (historyIndex === commandHistory.length) {
                inputElement.value = ""; // Clear if at most recent
            } else {
                inputElement.value = commandHistory[historyIndex];
            }
        }
        event.preventDefault(); // prevent caret movement
    }
});


    function handleCommand(input) {
        let args = input.trim().split(" ");
        let command = args[0];
        let output = "";
    
        switch (command) {
            case "ls":
                output = listFiles();
                break;
            case "cd":
                output = changeDirectory(args[1]);
                break;
            case "cat":
                output = readFile(args[1]);
                break;
            case "open":
                if (!args[1]) {
                    output = "Usage: open <file>";
                } else {
                    let filename = args[1];
                    let dir = getDirectory(currentDirectory);
                    if (dir[filename] && typeof dir[filename] === "string") {
                        output = `Opening ${filename}...\n\n${dir[filename]}`;
                    } else {
                        output = `open: ${filename}: No such file or not viewable.`;
                    }
                }
                break;
            case "whoami":
                output = "root@conradscott";
                break;
            case "uptime":
                output = "System Uptime: " + getUptime();
                break;
            case "run":
                output = runProgram(args[1]);
                break;
            case "exit":
                output = "Exiting terminal...!";
                updateTerminal(input, output);
                setTimeout(() => {
                    window.location.href = "/index.html";
                }, 1000);
                return;
            case "ping":
                if (!args[1]) {
                    output = "Usage: ping <host>";
                } else {
                    let host = args[1];
                    let ip, reverse, ttl;
                    if (host.toLowerCase() === "conradscott.co.uk") {
                        ip = "185.199.108.153";
                        reverse = "cdn-185-199-108-153.github.com";
                        ttl = 58;
                    } else {
                        ip = `${Math.floor(Math.random() * 223 + 1)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
                        let tld = host.split('.').pop();
                        reverse = `cdn-${ip.replace(/\./g, "-")}.${tld}`;
                        ttl = 116;
                    }
                    output = `PING ${host} (${ip}) 56(84) bytes of data.\n`;
                    for (let i = 1; i <= 3; i++) {
                        let latency = (Math.random() * 70 + 10).toFixed(1);
                        output += `64 bytes from ${reverse} (${ip}): icmp_seq=${i} ttl=${ttl} time=${latency} ms\n`;
                    }
                }
                break;
            case "clear":
            case "cls":
                terminalContent.innerHTML = "";
                return;
            case "--help":
            case "help":
                output = `
Available commands:
  ls             - List files
  cd <dir>       - Change directory
  cat <file>     - Read file contents
  open <file>    - Open any file
  run <program>  - Run a program
  ping <host>    - Ping a host
  clear, cls    - Clear the screen
  whoami         - Display your hacker alias
  uptime         - Check system uptime
  --help, help   - Display this help message
  exit           - Exit the terminal
                `;
                break;
            default:
                output = `Usage: ${command} -- use '--help' for available commands.`;
        }
        updateTerminal(input, output);
    }
    
    function updateTerminal(input, output) {
        const commandElement = document.createElement("div");
        commandElement.classList.add("command-entry");
        commandElement.innerHTML = `<span class="extra-command">root@conradscott:~/${currentDirectory.join("/")}$</span> ${input}`;

        const outputElement = document.createElement("div");
        outputElement.classList.add("command-output");
        outputElement.textContent = output;

        terminalContent.appendChild(commandElement);
        terminalContent.appendChild(outputElement);
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    const fileSystem = {
        Home: {
            "readme.txt": "Welcome to the extra commands page!",
            Documents: {
                "notes.txt": "Curiosity is key, just as it was when we were children.\nToo often, we let judgement stand in the way of discovery.",
                "todo.txt": "1. Get a good nights sleep\n2.\n3.\n4.",
                "hackerManifesto.txt": "We are anonymous. We are legion. Expect us.",
                "security_policy.txt": "All systems must be secure. No idea how, but make it happen!",
                "incident_report.docx": "Incident report: Unauthorized access detected. Initial assessment suggests internal misconfiguration led to the breach.",
            },
            Downloads: {
                CoolHackingTools: {
                    "freemalware.py": "Code it yourself, don't be a skiddie.",
                    "ipstresser.py": "Better luck next time champ!",
                    "bruteforce.exe": "Password? What password?",
                },
                "stolencredentials.txt": "root:root\nadmin:admin\nusername:password\n123:456",
            },
            Programs: {
                Python_Crypter: {
                    "crypter.py": "Creating stub...",
                },
                Python_C2_Server: {
                    Client: {
                        "client.py": "Uh oh, get pwned! :(",
                        "dropper.ps1": "Oh yes, I am a totally inconspicuous file.",
                    },
                    Server: {
                        "server.py": "No clients detected\nTrying again...\nFailed, please try again later",
                    },
                },
            },
            Secret_Folder: {
                "diary.txt": "Day 6205: I should probably have a nap or something.",
                "top_secret": "What are you looking at?!",
            },
            Logs: {
                "local.log": "[CMD] curl governmentsite.gov/secret_files.txt",
                "response.log": "[ERROR] 403 Forbidden - GET /governmentsite.gov/secret_files.txt - Access Denied",
                "activity.log": "ConradSec initiated remote access on governmentsite.gov. Connection refused; extraction failed."
            },
            Hacker_Tools: {
                "nmap.sh": "Scanning the network like a pro hax0rman.",
                "metasploit.rb": "Exploiting vulnerabilities since 1999.",
            },
            Exploits: {
                "zero_day.txt": "Discovered a zero-day: If you unplug the router, the internet stops working. Critical exploit.",
                "buffer_overflow.c": "Code that almost broke the internet... quite literally.",
            },
            SysConfig: {
                "sshd_config": "# SSH Daemon configuration file\nPermitRootLogin yes",
                "firewall_rules.conf": "# Block all IPs except 127.0.0.1. Safe and sound!",
            },
            Wireshark_Captures: {
                "capture1.pcap": "Packets captured: Some say 'SYN,' others say 'ACK'... I think they're arguing.",
            },
            Backups: {
                "system_backup.tar.gz": "Who needs backups anyway? I just use this to store my shopping list.",
            },
        },
    };
    

    function getUptime() {
        let seconds = Math.floor(performance.now() / 1000);
        return `${seconds} seconds`;
    }

    function runProgram(programName) {
        let dir = getDirectory(currentDirectory);
        if (dir[programName]) {
            return `Executing ${programName}...\n${dir[programName]}`;
        } else {
            return `Program not found: ${programName}`;
        }
    }

    function listFiles() {
        let dir = getDirectory(currentDirectory);
        let files = Object.keys(dir);
        let formattedFiles = files.map((file, index) => {
            // Add two spaces between each file/directory
            return file + "  ";
        });
    
        // Join the files with a space
        return formattedFiles.join("");
    }
    
    
    
    
    
    
    

    function changeDirectory(dirname) {
        if (dirname === "..") {
            if (currentDirectory.length > 1) {
                currentDirectory.pop();
            }
        } else {
            let dir = getDirectory(currentDirectory);
            if (dir[dirname] && typeof dir[dirname] === "object") {
                currentDirectory.push(dirname);
            } else {
                return `cd: no such directory: ${dirname}`;
            }
        }
        return "Current directory: ~/" + currentDirectory.join("/");
    }

    function readFile(filename) {
        let dir = getDirectory(currentDirectory);
        if (dir[filename] && typeof dir[filename] === "string") {
            return dir[filename];
        } else {
            return `cat: ${filename}: No such file`;
        }
    }

    function getDirectory(path) {
        return path.reduce((dir, sub) => (dir && dir[sub]) ? dir[sub] : {}, fileSystem);
    }
});
