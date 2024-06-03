# NoteMaster

A **simple** and **efficient** notes application for managing your notes using **Node.js**. NoteMaster leverages the `yargs` package to provide a robust command-line interface for adding, removing, removing all, listing, reading, and updating notes. The command prompt outputs are enhanced using the `colors` package to improve readability and user experience.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/NoteMaster.git
   cd NoteMaster
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

## Usage

NoteMaster provides several commands to manage your notes. Below is a comprehensive guide on how to use each command effectively.

### Help Manual

To get a general description of the application, run:

```bash
node index.js --help
```

### Get Information About a Particular Command

To get detailed information about a specific command, run:

```bash
node index.js <command_name> --help
```

### Commands

- **Add a Note:**

  ```bash
  node index.js add --title="Note 1" --body="This is the body of note 1"
  ```

  Adds a new note with the specified title and body.

- **Remove a Note:**

  ```bash
  node index.js remove --title="Note 1"
  ```

  Removes the note with the specified title.

- **List All Notes:**

  ```bash
  node index.js list
  ```

  Lists all the notes saved in the application.

- **Read a Note:**

  ```bash
  node index.js read --title="Note 1"
  ```

  Reads and displays the note with the specified title.

- **Update a Note:**

  ```bash
  node index.js update --title="Note 1" --body="Updated body of note 1"
  ```

  Updates the body of the note with the specified title.

- **Remove All Notes:**
  ```bash
  node index.js removeAll
  ```
  Removes all the notes saved in the application.

## Example Workflow

1. **Add a Note:**

   ```bash
   node index.js add --title="Meeting" --body="Discuss project milestones"
   ```

   Output:

   ```
   Note successfully added!
   ```

2. **List All Notes:**

   ```bash
   node index.js list
   ```

   Output:

   ```
   Your notes:
   Title 1: Meeting
   ```

3. **Read the Note:**

   ```bash
   node index.js read --title="Meeting"
   ```

   Output:

   ```
   Meeting
   -------------
   Discuss project milestones
   ```

4. **Update the Note:**

   ```bash
   node index.js update --title="Meeting" --body="Discuss project milestones and timelines"
   ```

   Output:

   ```
   Note updated successfully!
   ```

5. **Read the Updated Note:**

   ```bash
   node index.js read --title="Meeting"
   ```

   Output:

   ```
   Meeting
   -------------
   Discuss project milestones and timelines
   ```

6. **Remove the Note:**

   ```bash
   node index.js remove --title="Meeting"
   ```

   Output:

   ```
   Note has been successfully removed
   ```

7. **Remove All Notes:**
   ```bash
   node index.js removeAll
   ```
   Output:
   ```
   All notes have been successfully removed
   ```

---

By following these instructions, you can easily manage your notes using NoteMaster. Feel free to contribute and improve the project by creating pull requests or reporting issues. Enjoy using NoteMaster!

### Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Yargs**: A library to handle command-line arguments.
- **Colors**: A library to add color and style to the terminal output.

### Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

### License

This project is licensed under the MIT License.

---
