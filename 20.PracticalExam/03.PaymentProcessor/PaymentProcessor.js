class PaymentProcessor{
    constructor(options){
        this.options = {types: ["service", "product", "other"], precision: 2}

        if(options !== undefined){
            for (let key of Object.keys(options)) {
                this.options[key] = options[key]
            }
        }

        this.payments = []
    }

    registerPayment(id, name, type, value){
        if (id === '' || name === '' || typeof value !== 'number' || !this.options.types.includes(type) ||
            this.payments.find(p => p.id === id)){
            throw new Error()
        }
        this.payments.push({id, name, type, value})
    }

    deletePayment(id){
        if (!this.payments.find(p => p.id === id)){
            throw new Error()
        }
        this.payments = this.payments.filter(p => p.id !== id)
    }

    get(id){
        if (!this.payments.find(p => p.id === id)){
            throw new Error()
        }
        let payment = this.payments.find(p => p.id === id)
        return `Details about payment ID: ${payment.id}\n- Name: ${payment.name}\n- Type: ${payment.type}\n
        - Value: ${payment.value.toFixed(this.options.precision)}`
    }

    setOptions(options){
        for (let key of Object.keys(options)) {
            this.options[key] = options[key]
        }
    }

    toString(){
        let balance = 0
        this.payments.forEach(p => balance += p.value)
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${balance.toFixed(this.options.precision)}`;
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());