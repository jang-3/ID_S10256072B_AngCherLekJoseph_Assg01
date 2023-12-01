# QuickScript

### Goal: to present the fictional company in a good light so as to attract users through the website. 

## Description
QuickScript is a coding site for those learning code in all languages. It is targeted at both beginners learning programming, as well as promoting efficiency in advanced coders. QuickScript is comprised of two major components: the use of a Natural Language Processing chatbot, Codey, and a network of interconnected users capable of sharing their own code which can be executed internally within QuickScript. Codey operates internally within the workspace, being able to simultaneously learn from preexisting code and generate code to fit the current work within the program. It is able to show its suggestions visually through running the simulated code and displaying it within the browser. 

For beginners, Codey specializes in turning prompts into suggestions and explaining the code generated in a clear and succinct manner. Because prompts often draw from real world situations, Codey is able to learn based on searching the web, and using conclusions drawn to interpret user prompts, or answer any questions related to the ongoing project despite not being code-related. For advanced users, Codey saves time through spotting syntax or logical errors (as determined through its understanding of the user’s prompts) and fixing them with user permissions. 

Users can share code by publishing finished projects, allowing other users to gain inspiration from or even learn from other programmer’s code. User collaboration is a key feature of QuickScript, maximizing efficiency for users. 

## Design Process
### Wireframes
Desktop: https://xd.adobe.com/view/f673494d-eede-43da-b1d5-4338be94eb10-a320/

Mobile: https://xd.adobe.com/view/f673494d-eede-43da-b1d5-4338be94eb10-a320/

### Logo
The concept behind this logo is simple but manifold. It is a Q + Lightning bolt + speech bubble. These represent the name, the speed (with the help of AI), and the community respectively. It perfectly represents this company and how it caters to its users on its two pillars. 

### Font Choice
Because this site caters to both formal and informal programmers, the perfect font selected is Bebas Neue. It’s bold and captivating look can be used for both formal and informal purposes. The font for body text is Space Grotesk, universally appealing to developers all around due to it’s futuristic look that is great for a computer code look. 

### Audience
This website is for developers of all ages and experience. So long as you want to code, this is for you. Users of this website should have a desire to learn code, or to complete their existing projects, given this works on both a professional and beginner level with the help of AI. The best way to help them achieve this is using AI, which caters to their individual requests in a unique and tailored way. 

### User stories
1.	As a programmer, I want a flawless execution of the code that I inputted, so that I can accurately visualize how it works outside QuickScript. 
2.	As a coder, I want a visually aesthetic design of the website so that I can feel comfortable when I work. 
3.	As a collaborator, I want the ability to collaborate with other users who are part of my project so that we may produce the desired result efficiently.
4.	As a beginner in programming, I want a chatbot that can explain any errors I made or suggest ways to improve my code, so that I may learn. 
5.	As a programmer lacking inspiration, I want to be able to see other user’s ideas and code so that I may apply an inspired idea into my project. 
6.	As a collaborator, I want the ability to understand code that other team members has created so that I may incooperate their code into mine. 
7.	As an advanced programmer, I want to see if I missed any hidden errors so that I can save time on finding my errors. 
8.	As a non-programmer, I want to execute projects written by other programmers without needing to see their code. 
9.	As a QuickScript user, I want my navigation of the website to be intuitive so that I may understand it. 
10.	As a seasoned programmer, I want the option of turning Codey off to work uninterrupted. 

### Features Implemented
#### 1.	Outlining Services Provided 
The website notifies any viewers what QuickScript is used for along with its mission. 
#### 2.	Premium Subscription pricing and benefits 
The website advertises the benefits of getting a premium subscription and its price. 
#### 3.	Showcasing projects of other users 
The website showcases projects of other users. 
#### 4.	Advertising special features 
QuickScript advertises its special features and why it may be different from other coding websites. 
#### 5.	Description of AI chatbot, Codey 
The website discusses the usage of AI and how it can help users. 
#### 6.	Partnerships with fictional companies 
partnerships with fictional companies are listed in the footer.
#### 7.	Interactive buttons 
various buttons were placed around QuickScript, all of them interactive upon hover. 
#### 8.	Mouse-over interactions 
More than just buttons were made interactive. 
#### 9.	Navigation System 
the header contains the logo as well as ways to navigate to other places in the website. 

## Technologies Used
#### Blackbox.ai 
- (https://www.blackbox.ai) 
The project uses Blackbox.ai in its development to save time on research and implementation. 

## Testing

### Scenarios
1.	Get Started
    1. Click “Get Started”
    2. You will be redirected to a page which allows you to enter username, password, and email.
    3. Try to submit an empty form and there will be an error message.
    iv.	Try to submit the form with an invalid email address and an error message will appear. 
    4. Try to submit a form with all inputs valid and a success message will appear. You will be redirected to another homepage for logged in users. You will be prompted to verify your email address. 

2.	Login
    1. Click “Login” in the header
    2. You will be redirected to a page which allows you to enter username and password.
    3. Try to submit an empty form and there will be an error message.
    4. Try to submit the form with an invalid username and/or password and an error message will appear. 
    5. Try to submit a form with all inputs valid and a success message will appear. You will be redirected to another homepage for logged in users. 

3.	Contact Information
    1. Click “Contact Us” in the header
    2. You will be redirected to a page which displays contact information. 

4.	Signups
    1. Click “Sign Up” in the header
    2. You will be redirected to a page which allows you to enter username, password, and email.
    3. Try to submit an empty form and there will be an error message.
    4. Try to submit the form with an invalid email address and an error message will appear. 
    5. Try to submit a form with all inputs valid and a success message will appear. You will be redirected to another homepage for logged in users. You will be prompted to verify your email address. 

5.	Project viewing
    1. Click on a project
    2. You will be redirected to a project page that displays the thumbnail,  description of the project, and a button to run. There is a section to comment suggestions, give a like, and to view the code. 
    3. Pressing run will play the project In a fullscreen. 
    4. Exit by pressing Esc

6.	QuickScript Pro
    1. Click on “Learn More”
    2. You will be redirected to a page that details the benefits of QuickScript Pro in detail. 

7.	Partners
    1. Click on one of the partner links in the footer
    2. You will be redirected to the website of the partner. 

### Cross-Testing
The website looks largely similar across browsers. Across different desktop sizes, the elements are responsive and resize accordingly due to the heavy usage of flexboxes. All interactive elements continue to respond well on Chrome, Safari, Brave, Opera, and Microsoft Edge. On mobile dimensions, many elements are deliberately resized to fit the smaller screen size while maintaining an aesthetic feel. 

### Bugs
On Safari and Brave, there exists a bug that does not register curved corner outlines, and lets it remain sharp. Therefore, some elements will seem to have a sharp edge, while the code remains sound. These corners are curved on the rest, Chrome, Opera, and Microsoft Edge. 

## Credits
### Media: 
-	All photos regarding the branding QuickScript are created by me. 
-	The photo used in the website backdrop was (https://images.pond5.com/wave-particles-background-illuminated-digital-footage-090527297_prevstill.jpeg)

Photos used In the project thumbnail are as follows: 
#### Pinterest: 
-	https://www.pinterest.com/pin/492649944764818/
-	https://www.pinterest.com/pin/1266706138181803/
-	https://www.pinterest.com/pin/29484572553677885/
-	https://www.pinterest.com/pin/1266706138181803/

#### Artstation: 
-	https://www.artstation.com/artwork/B3ZX5z
-	https://www.artstation.com/artwork/g2KokL


### Acknowledgements 
-	I received inspiration for this project from repl.it and scratch.mit.edu
