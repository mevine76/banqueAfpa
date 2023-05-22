class Client {
    constructor(firstname, lastname, dateOfBirth, balance, accountNumber, address, phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.address = address;
        this.phone = phone;
    }

    showInfos() {
        return this.firstname + " " + this.lastname + ", né(e) le " + this.dateOfBirth + ", solde du compte: " + this.balance + ", numéro de compte: " + this.accountNumber;
    }
}



// Tableau d'objets contenant les données à ajouter à la liste
let clients = [];

    let client1 = new Client('Mévine', 'Veeren', '09/01/1975', '50', '123456', '1 rue des Champs 75018', '0645953121')
    let client2 = new Client('Aglae', 'Michot', '09/01/1991', '500', '654321', '2 rue des Champs 75018', '0645953122')
    let client3 = new Client('Julien', 'Vauclin', '09/01/1970', '50000', '789456', '3 rue des Champs 75018', '0645953123')
    let client4 = new Client('Karl', 'Kondamoyen', '09/02/1995', '5000', '456789', '4 rue des Champs 75018', '0645953124')
    let client5 = new Client('Samir', 'Khaloua', '09/01/1986', '500000', '456123', '5 rue des Champs 75018', '0645953125')
    let client6 = new Client('Allan', 'Dehors', '09/01/1974', '50000', '012345', '6 rue des Champs 75018', '0645953126')
    let client7 = new Client('Xavier', 'Jegou', '09/01/1973', '500', '026951', '7 rue des Champs 75018', '0645953127')
    let client8 = new Client('Andy', 'Quinette', '09/01/1971', '50000', '753951', '8 rue des Champs 75018', '0645953128')
    let client9 = new Client('Efosa', 'Omorodion', '09/01/1998', '5000', '485120', '9 rue des Champs 75018', '0645953129')
    let client10 = new Client('Ruslan', 'Reshetnikov', '09/01/1980', '500000', '007', '10 rue des Champs 75018', '0645953130')
    
    clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
  
// Récupération de l'élément <ul> dans lequel ajouter les éléments de la liste
let ul = document.querySelector("ul.table");

// Parcours du tableau d'instances de la classe Client
for (let i = 0; i < clients.length; i++) {
  // Création d'un élément <li> avec la classe "row"
  let li = document.createElement("li");
  li.className = "row";

  // Création des éléments <div> avec la classe "cell" pour chaque information de l'instance de la classe Client
  let divFirstname = document.createElement("div");
  divFirstname.className = "cell";
  divFirstname.textContent = clients[i].firstname;
  li.appendChild(divFirstname);

  let divLastname = document.createElement("div");
  divLastname.className = "cell";
  divLastname.textContent = clients[i].lastname;
  li.appendChild(divLastname);

  let divDateOfBirth = document.createElement("div");
  divDateOfBirth.className = "cell";
  divDateOfBirth.textContent = clients[i].dateOfBirth;
  li.appendChild(divDateOfBirth);

  let divBalance = document.createElement("div");
  divBalance.className = "cell";
  divBalance.textContent = clients[i].balance + " " + "€";
  li.appendChild(divBalance);

  let divAccountNumber = document.createElement("div");
  divAccountNumber.className = "cell";
  divAccountNumber.textContent = clients[i].accountNumber;
  li.appendChild(divAccountNumber);

    // Ajout de l'élément <li> à la liste
    ul.appendChild(li);

    


}

// Récupération de l'élément <ul> contenant les éléments de la liste
ul = document.querySelector("ul.table");

// Récupération de l'élément <li> correspondant à la ligne à supprimer
// Dans cet exemple, nous supposons que la ligne à supprimer est la deuxième ligne du tableau (index 1)
let li = ul.querySelectorAll("li.row")[1];

// Suppression de l'élément <li>
ul.removeChild(li);

// Code JavaScript pour ajouter les données du tableau d'objets clients au tableau HTML
let tbody = document.querySelector("table tbody");

// Code JavaScript pour ajouter un bouton "Augmenter le solde" à chaque ligne du tableau
// Parcours du tableau d'instances de la classe Client
for (let i = 0; i < clients.length; i++) {
    // Création d'un élément <tr> pour chaque instance de la classe Client
    let tr = document.createElement("tr");
  
    // Création des éléments <td> pour chaque information de l'instance de la classe Client à afficher dans le tableau
    let tdLastname = document.createElement("td");
    tdLastname.textContent = clients[i].lastname;
    tr.appendChild(tdLastname);
  
    let tdAccountNumber = document.createElement("td");
    tdAccountNumber.textContent = clients[i].accountNumber;
    tr.appendChild(tdAccountNumber);
  
    // Création d'un élément <td> pour les boutons "Plus d'infos" et "Augmenter le solde"
    let tdButtons = document.createElement("td");
  
    // Création d'un élément <button> pour le bouton "Plus d'infos"
    let infoButton = document.createElement("button");
    infoButton.className = "btn btn-primary";
    infoButton.textContent = "Plus d'infos";
  
    // Ajout d'un événement click sur le bouton pour afficher les informations supplémentaires
    infoButton.addEventListener("click", function() {
      // Récupération des informations supplémentaires à afficher
      let address = clients[i].address;
      let phone = clients[i].phone;
  
      // Affichage des informations supplémentaires
      alert("Adresse : " + address + "\nTéléphone : " + phone);
    });
  
    // Ajout du bouton à l'élément <td>
    tdButtons.appendChild(infoButton);
  
    
  //   // Création d'un élément <input> pour saisir le montant de l'augmentation du solde
  // let increaseBalanceInput = document.createElement("input");
  // increaseBalanceInput.type = "number";
  // increaseBalanceInput.placeholder = "Montant";

  // // Ajout du champ de saisie à l'élément <td>
  // tdButtons.appendChild(increaseBalanceInput);

  // // Création d'un élément <button> pour le bouton "Augmenter le solde"
  // let increaseBalanceButton = document.createElement("button");
  // increaseBalanceButton.className = "btn btn-success";
  // increaseBalanceButton.textContent = "Augmenter le solde";

  // // Ajout d'un événement click sur le bouton pour augmenter le solde du client
  // increaseBalanceButton.addEventListener("click", function() {
  //   // Récupération du montant saisi par l'utilisateur
  //   let amount = parseInt(increaseBalanceInput.value);

  //   if (!isNaN(amount)) {
  //     // Augmentation du solde du client
  //     clients[i].balance += amount;

  //     // Mise à jour du tableau HTML en fonction du filtre sélectionné
  //     updateTable(filter.value);
  //   }
  // });

  // // Ajout du bouton à l'élément <td>
  // tdButtons.appendChild(increaseBalanceButton);

  // // Ajout de l'élément <td> à l'élément <tr>
  // tr.appendChild(tdButtons);

  // // Ajout de l'élément <tr> à l'élément <tbody> du tableau
  // tbody.appendChild(tr);

}