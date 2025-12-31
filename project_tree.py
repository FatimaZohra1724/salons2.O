import os
import json
from pathlib import Path

def generate_project_tree(root_path="."):
    """
    Generate a tree structure of the project directory.
    """
    def _walk_directory(path, prefix="", is_last=True):
        full_path = Path(path)
        if not full_path.exists():
            return []
        
        tree = []
        items = sorted(full_path.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
        
        for index, item in enumerate(items):
            is_last_item = index == len(items) - 1
            item_prefix = "└── " if is_last_item else "├── "
            connector = "    " if is_last_item else "│   "
            
            item_name = item.name
            if item.is_dir():
                item_name += "/"
                tree.append(prefix + item_prefix + item_name)
                new_prefix = prefix + connector
                tree.extend(_walk_directory(item, new_prefix, is_last_item))
            else:
                tree.append(prefix + item_prefix + item_name)
        
        return tree
    
    tree_lines = _walk_directory(root_path)
    tree_lines.insert(0, root_path + "/")
    return "\n".join(tree_lines)

def save_tree_to_file(tree_content, filename="project_tree.txt"):
    """Save the project tree to a file."""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(tree_content)
    print(f"Project tree saved to {filename}")

def main():
    # Get current directory (VS Code workspace root)
    root = os.getcwd()
    print(f"Generating project tree for: {root}")
    
    # Generate tree
    tree = generate_project_tree(root)
    
    # Print to console
    print("\n" + "="*50)
    print("PROJECT TREE")
    print("="*50)
    print(tree)
    
    # Save to file
    save_tree_to_file(tree)
    
    # Also save as JSON for programmatic use
    json_tree = {
        "root": root,
        "tree": tree.split("\n")
    }
    with open("project_tree.json", 'w', encoding='utf-8') as f:
        json.dump(json_tree, f, indent=2)
    print("JSON version saved to project_tree.json")

if __name__ == "__main__":
    main()

