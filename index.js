let newHeader;

const mainNode = document.querySelector('main#main');
mainNode.remove();

newHeader = document.createElement('h1');

newHeader.id= 'victory';

const yourName='Ana RR';
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);





// const newHeader = document.createElement(h1);
// newHeader.id ='victory';

// const yourName ='Ana RR';
// newHeader.textContext =`${yourName}is the champion`;

// document.body.appendChild(newHeader);
