let singDiv = document.createElement('div');
let btn = document.createElement('button');
let singButt = document.createTextNode('Sing!');
btn.append(singButt);
singDiv.append(btn);
document.body.append(singDiv);

let chorusDiv = document.createElement('div');
document.body.append(chorusDiv);
chorusDiv.className = 'chorusBox';


btn.addEventListener('click', function () {
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('*Dramatic organ music*');
    document.body.append(h3);
    h3.append(h3Text);
    var friends = ['Katie', 'Paul', 'Chris', 'Caleb', 'Patrick'];
    for (let x = 0; x < friends.length; x++) {
        for (let y = 99; y > 0; y--) {
            let paragraph = document.createElement('p');
            h3.append(paragraph);
            if (y === 0) {
                let noLines = document.createTextNode('0 lines of code in the file.');
                paragraph.append(noLines);
            } else {
            let lines = document.createTextNode(y + ' lines of code in the file, ' + y + ' lines of code; ' + friends[x] + ' strikes one out, clears it all out, ' + (y - 1) + ' lines of code in the file!');
            paragraph.append(lines);
            }
        }
    }
});

