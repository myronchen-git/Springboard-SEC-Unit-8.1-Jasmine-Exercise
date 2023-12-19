describe('Helpers test', () => {
    it('should sum each type of amount in allPayments on sumPaymentTotal()', () => {
        allPayments = {
            'payment1': { billAmt: '100', tipAmt: '10', tipPercent: 10 },
            'payment2': { billAmt: '200', tipAmt: '30', tipPercent: 15 }
        };

        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
        expect(sumPaymentTotal('tipPercent')).toEqual(25);

        allPayments = {};
    });

    it('should on calculate the tip percent on calculateTipPercent()', () => {
        expect(calculateTipPercent(20, 3)).toEqual(15);
    });

    it('should append a new data cell to a table row on appendTd()', () => {
        const tr = document.createElement('tr');

        appendTd(tr, 'a');

        expect(tr.children.length).toEqual(1);
        expect(tr.children[0].innerHTML).toEqual('a');
    });

    it('should append a delete button to a given table row on appendDeleteBtn()', () => {
        const tr = document.createElement('tr');

        appendDeleteBtn(tr);

        expect(tr.children[0].innerText).toEqual('X');
    });

    it('should remove the table row when clicking on the delete button given by appendDeleteBtn()', () => {
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');

        appendDeleteBtn(tr);
        tbody.append(tr);

        expect(tbody.children.length).toEqual(1);

        tr.children[0].click();

        expect(tbody.children.length).toEqual(0);
    });
});