import styled from "styled-components";

export const Container = styled.div`
width: 80%;
margin: auto;
font-family: 'Poppins', sans-serif;

.btn {
    color:#9ea3b0;
    border: 0rem;
    border-radius: 5rem;
    height: 2.5rem;
    text-align: center;
}

.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
        height: 100px;
    }    

    .btn {
        margin-top:1.5rem;
        width: 10rem;
        border: 0.2px solid black
    }
    
}

section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product-content {        
        text-align: center;
        height: 365px;
        background: #fff;
        padding: 12px;

        .btn {
            margin-top:10px;
            width:6rem;
        }
    }  


.form {
    margin-top: 10rem;
    margin-bottom: 8rem;
    font-size: 45px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h4 {
        marin-bottom: 2rem;
    }

    input {
        height: 2.5rem;
        border-radius: 1rem;
        text-align: center;
        width: 25rem;
    }

    .input-container {      
            margin-top:1rem;

            .btn {              
                width:25rem;
            }
        }
    }
}
`