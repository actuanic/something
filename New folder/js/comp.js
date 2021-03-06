const comp = {};
comp.welcomeScreen=`
<div class="box">
        <img src="https://www.upsieutoc.com/images/2020/06/14/ra.jpg" alt="" class="box-img">
        <h1 style="font-family:sans-serif; text-transform: uppercase;font-weight: 500;">

            Nhật Minh (ACT)</h1>


        <h5>
            Web Developer - Web Designer</h5>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laboriosam neque nostrum illum, impedit
            facere molestiae dolorum ipsa reprehenderit officia atque ea doloremque repellat, nobis odit debitis at
            sunt. Quisquam!</p>
        <ul>

            <li><a href="https://www.facebook.com/profile.php?id=100049410726637"><i class="fa fa-facebook-square"
                        aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter-square" ariga-hidden="true"></i></a></li>
            <li><a href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1"><i
                        class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
        </ul>

    </div>
`;
comp.SignupScreen=`
<div class="container">
        <div class="lefts">
            <div class="div">

                <h1 style=" text-decoration: underline solid #2e86de;">Sign Up</h1>
                <input type="text" name="" id="input_name" placeholder="Username...">
                <input type="email" name="" id="input_email" placeholder="Email...">
                <input type="password" name="" id="input_pass" placeholder="Password...">
                <input type="password" name="" id="input_confirmPass" placeholder="Confirm Password...">
                <button id="bt" onclick="signUp()">Sign up</button>
                <div>
                    <p>Already have a account? <a style="color: #2980b9 ;" href="login.html">Login</a></p>
                    <p id="alertForUser"></p>
                </div>


            </div>

            <div>

            </div>
            
        </div>
    </div>
`;

comp.LoginScreen = `

<div class="container">
        <div class="lefts">
            <div class="div">

                <h1 style=" text-decoration: underline solid #2e86de;">Login</h1>
                <input type="email" name="" id="input_email" placeholder="Email...">
                <input type="password" name="" id="input_pass" placeholder="Password...">
                <button id="bt" >Login</button>
                <div>
                    <p>Don't have a account?   
                </div>


            </div>

            <div>

            </div>
            
        </div>
    </div>
`

window.onload = init;