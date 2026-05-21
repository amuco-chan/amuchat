import os
import glob

files = glob.glob('src/**/*.js', recursive=True) + glob.glob('src/**/*.jsx', recursive=True)
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace literal backslash followed by n with \n
    content = content.replace('\\\\n', '\\n')
    # Replace literal backslash followed by [ with \[
    content = content.replace('\\\\[', '\\[')
    content = content.replace('\\\\]', '\\]')
    content = content.replace('\\\\s', '\\s')
    content = content.replace('\\\\d', '\\d')
    content = content.replace('\\\\*', '\\*')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
