document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const inputPass = document.getElementById('password').value;
    const res = await fetch('password.json');
    const data = await res.json();
    if (inputPass === data.password) {
        // Transición simple
        document.getElementById('logueo').style.opacity = 1;
        let fade = setInterval(() => {
            if (document.getElementById('logueo').style.opacity > 0) {
                document.getElementById('logueo').style.opacity -= 0.1;
            } else {
                clearInterval(fade);
                document.getElementById('logueo').style.display = 'none';
                document.getElementById('landing').style.display = 'block';
                document.getElementById('landing').style.opacity = 0;
                let appear = setInterval(() => {
                    if (document.getElementById('landing').style.opacity < 1) {
                        document.getElementById('landing').style.opacity = 
                            parseFloat(document.getElementById('landing').style.opacity) + 0.1;
                    } else {
                        clearInterval(appear);
                    }
                }, 30);
            }
        }, 30);
    } else {
        document.getElementById('error').style.display = 'block';
    }
});