import pexpect
import random
import sys

email = f"amuchat_user_{random.randint(10000, 99999)}@gmail.com"
password = "AmuChatPassword123!"
domain = f"amuchat-{random.randint(10000, 99999)}.surge.sh"

print(f"Deploying to {domain} with {email}...")

child = pexpect.spawn(f'npx surge ./dist {domain}')
try:
    i = child.expect(['email:', 'Login:'], timeout=30)
    child.sendline(email)
    child.expect('password:')
    child.sendline(password)
    child.expect(pexpect.EOF, timeout=120)
    print(child.before.decode('utf-8'))
except Exception as e:
    print(str(e))
    print(child.before.decode('utf-8'))
