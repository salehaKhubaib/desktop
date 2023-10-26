// Add

function addElement (language)
{
    const add = document.createElement('li');
    const textNode = document.createTextNode(language);
    add.appendChild(textNode);
    document.querySelector('.language').appendChild(add);
}
addElement('golang');
addElement('TypeScript')

// edit
function edit (language)
{
    const secondOne = document.querySelector('li:nth-child(2)');
    const newLi = document.createElement('li');
    newLi.textContent = 'java'
    secondOne.replaceWith(newLi);
    

}
edit('java');

// remove

function remove (language)
{
    const firstOne = document.querySelector('li:first-child');
    firstOne.remove();
}
remove();