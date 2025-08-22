# Configuration EmailJS pour le Formulaire de Contact

## Étapes de Configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer le Service Email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez le **Service ID** généré

### 3. Créer un Template Email
1. Allez dans "Email Templates"
2. Cliquez "Create New Template"
3. Utilisez ce template :

```
Sujet: Nouveau message de contact - Portfolio

De: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Envoyé depuis le portfolio d'Abakar Oumar Adam
```

4. Notez le **Template ID** généré

### 4. Obtenir la Clé Publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Mettre à Jour le Code
Dans `contact.html`, remplacez :
- `YOUR_PUBLIC_KEY` par votre clé publique
- `YOUR_SERVICE_ID` par votre Service ID
- `YOUR_TEMPLATE_ID` par votre Template ID

### 6. Email de Destination
L'email de destination est déjà configuré : **oabakardk@groupeisi.com**

## Variables du Template
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur  
- `{{message}}` - Message du formulaire
- `{{to_email}}` - Email de destination (oabakardk@groupeisi.com)

## Test
Une fois configuré, testez le formulaire pour vérifier que les emails arrivent bien à oabakardk@groupeisi.com
