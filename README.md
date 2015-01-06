Donnie
======

A simple and minimalist CSS Framework

## Features

* Responsive grid system
* Mobile first
* Built with Sass
* Beautiful buttons and forms
* Built on [Normalize.css](https://github.com/necolas/normalize.css)

## Get Started

Include the CSS file in your project:

```html
<link rel="stylesheet" href="donnie.css">
```

## Grid System

| Class     | Media Query                |
| ----------|:--------------------------:|
| .col_*    | none         			   |
| .sm_col_* | @media (min-width: 568px)  |
| .md_col_* | @media (min-width: 768px)  |
| .lg_col_* | @media (min-width: 1024px) |

## UI

| Type           | Class          |
| ---------------|:--------------:|
| Button default | .button	      |
| Button A       | .button .btn-a |
| Button B       | .button .btn-b |
| Button C       | .button .btn-c |
| Form           | .form          |

### Example

```html
	<div class="row">
		<div class="col_12">
			<h2>Buttons</h2>	

			<button type="button" class="button">.button</button>
			<button type="button" class="button btn-a">.button .btn-a</button>
			<button type="button" class="button btn-b">.button .btn-b</button>
			<button type="button" class="button btn-c">.button .btn-c</button>
		</div>
	</div>
	
	<div class="row">
		<div class="col_12 sm_col_5">
			<h2>Form</h2>

			<form class="form">
			    <fieldset>
			        <legend>Form Example</legend>

			        <label for="name">Name</label>
			        <input id="name" type="text" placeholder="Name">

			        <label for="email">Email</label>
			        <input id="email" type="email" placeholder="Email">

			        <label for="contry">Country</label>
			        <select id="contry">
			            <option>México</option>
			            <option>Canada</option>
			            <option>USA</option>
			        </select>

			        <label for="cellphone">Cellphone</label>
			        <input id="cellphone" type="tel" placeholder="Cellphone">

			        <label for="subscribe">
			            <input id="subscribe" type="checkbox"> Subscribe
			        </label>

			        <button type="submit" class="button btn-a">Register</button>
			    </fieldset>
			</form>
		</div>
	</div>
```

## License

Copyright (c) 2014 Germán Encinas - Released under The MIT License.
