
import { CuentaDeCobro } from './cuenta-de-cobro';
import { Contratista } from '../contratista/contratista';

/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class CuentaDeCobroDetail extends CuentaDeCobro {
   
    
    contratisa: Contratista;
    concepto:String;
    numeroCuentaDeCobro:number;
    

    
}