class PaymentManager{
    constructor(title){
        this.title = title
        this.element = this.createElement()
    }

    render(id){
        $(`#${id}`).append(this.element)
    }

    createElement(){
        let table = $('<table>')
        let thead = $('<thead>')
        let tbody = $('<tbody class="payments"></tbody>')
        let tfoot = $('<tfoot class="input-data"></tfoot>')

        table.append(`<caption>${this.title} Payment Manager</caption>`)

        thead.append($('<tr>')
            .append($('<th class="name">Name</th>'))
            .append($('<th class="category">Category</th>'))
            .append($('<th class="price">Price</th>'))
            .append($('<th>Actions</th>'))
        )

        let addBtn = $('<button>Add</button>').click(addPayment)

        tfoot.append($('<tr>')
                .append($('<td><input name="name" type="text"></td>'))
                .append($('<td><input name="category" type="text"></td>'))
                .append($('<td><input name="price" type="number"></td>'))
                .append($('<td></td>').append(addBtn))
        )

        table.append(thead).append(tbody).append(tfoot)
        return table

        function addPayment() {
            let inputFields = $(this).parent().parent().find('input')
            let name = $(inputFields[0])
            let category = $(inputFields[1])
            let price = $(inputFields[2])

            if (name.val() !== '' && category.val() !== '' && price.val() !== ''){
                let paymentRow = $('<tr>')
                let deleteBtn = $('<button>Delete</button>').click(deleteRow)

                paymentRow.append($(`<td>${name.val()}</td>`))
                    .append($(`<td>${category.val()}</td>`))
                    .append($(`<td>${Number(price.val())}</td>`))
                    .append($('<td></td>').append(deleteBtn))

                tbody.append(paymentRow)

                name.val('')
                category.val('')
                price.val('')
            }
        }
        
        function deleteRow() {
            $(this).parent().parent().remove()
        }
    }
}