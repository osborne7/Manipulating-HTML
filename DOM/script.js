document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Click!');
    button.appendChild(buttonText);
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('You clicked me!');
    });

    //display text as alert when submitted
    let submitButton = document.getElementById('btnSubmit');
    let textBox = document.getElementById('textBox');

    submitButton.addEventListener('click', function() {
        alert(textBox.value);
    });

    //create a div which changes color when moused over
    let div = document.createElement('div');
    div.className = "box1";
    document.body.appendChild(div);

    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'navy';
    });

    div.addEventListener('mouseout', function(){
        div.style.backgroundColor = 'aquamarine';
    });

    // turn paragraph random color when clicked
    let para = document.createElement('p');
    let paraText = document.createTextNode('Paragraph text would go here.');
    para.appendChild(paraText);
    document.body.appendChild(para);

    para.addEventListener('click', function() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        this.style.color = color;
    });

    let nameButton = document.createElement('button');
    let nameButtonText = document.createTextNode('Enter Name');
    nameButton.appendChild(nameButtonText);
    document.body.appendChild(nameButton);
    let emptyDiv = document.createElement('div');
    document.body.appendChild(emptyDiv);

    nameButton.addEventListener('click', function() {
        let nameSpan = document.createElement('span');
        let name = document.createTextNode('Eleanor');
        nameSpan.appendChild(name);
        emptyDiv.appendChild(nameSpan);
    });
    
    //add friends' names to ul
    
    let friends = ['Lizzy', 'Nadia', 'Rene', 'Betsy', 'Natalie', 'Jackie', 'Alex', 'Andrew', 'Justine', 'Jo'];

    let friendButton = document.getElementById('addFriend');

    friendButton.addEventListener('click', function() {
        let friendList = document.getElementById('friendList');
        for (let i = 0; i < friends.length; i++) {
            let currentFriend = friends[i];
            // console.log(currentFriend);
            let friendText = document.createTextNode(currentFriend);
            let eachFriend = document.createElement('li');
            eachFriend.appendChild(friendText);
            friendList.appendChild(eachFriend);
        }
    });

});