# Password Generator!
Generate a random password of particular length, symbols and number using NodeJS with CLI environment.

### Install node packages
	>npm i commander, chalk, clipboardy

### Help Commands
	> ('-l, --length <number>', 'length of password')
	> ('-s, --save', 'save password to .txt file')
	> ('-nn, --no-num', 'remove numbers')
	> ('-ns, --no-symbols', 'remove symbols')

### Generate Password
Using a custom command to generate password:- 
```
passwordgen
```
**Note:- **By default it generated 8 length passcode.

#### Set a length of password

```
passwordgen --length=20
```

#### Generate password without numbers(Only contains aplha and special chars)

```
passwordgen --length=25 --nn
```


#### Generate password without special chars

```
passwordgen --length=30 --ns
```
**Using Both**
```
passwordgen --length=30 --nn --ns
```
**Save Password to .txt file**
```
passwordgen --length=21 --nn --ns
```
**Examples commands**
>passwordgen	--save   // Save a 8 len password to file
>passwordgen	--nn		// Generate 8 len password without numbers
>passwordgen 	--ns		// without special chars
>passwordgen	--save  // save a 8 len password

#### Output
```
Generated Password: fBvniHL$XVBwI3OyvIJgS2K+L+e5DSy8$cd5-9EWvoC!paX@nV
Password copy to clipboard!
Password saved to password.txt file
```