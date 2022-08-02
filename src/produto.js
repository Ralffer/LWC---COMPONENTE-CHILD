/*/importar da biblioteca lwc, o API

O API permite que o atributo desejado se torne produto publico
receba dados de fora (pai)
propiredade publica
*/

import { LightningElement, api } from "lwc";

export default class produto extends LightningElement {
 // Decorando o filho para receber dados do pai
 //@api nomeDaPropriedade
 @api produto;
 @api preco;




}