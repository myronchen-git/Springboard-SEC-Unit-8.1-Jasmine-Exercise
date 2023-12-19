describe('Payments test', () => {
    const bill = '50';
    const tip = '5';
    const tipPercent = Math.round(tip/bill*100);

    beforeEach(() => {
        billAmtInput.value = bill;
        tipAmtInput.value = tip;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', () => {
        submitPaymentInfo();

        expect(paymentId).toEqual(1);
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual(bill);
        expect(allPayments['payment' + paymentId].tipAmt).toEqual(tip);
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(tipPercent);
    });

    it('should return a payment object on createCurPayment()', () => {
        const payment = createCurPayment();

        expect(payment.billAmt).toEqual(bill);
        expect(payment.tipAmt).toEqual(tip);
        expect(payment.tipPercent).toEqual(tipPercent);
    });

    it('should create a new payment table row on appendPaymentTable()', () => {
        appendPaymentTable(createCurPayment());

        const paymentRows = paymentTbody.children;

        expect(paymentRows.length).toEqual(1);
        expect(paymentRows[0].children[0].innerText).toEqual('$' + bill);
        expect(paymentRows[0].children[1].innerText).toEqual('$' + tip);
        expect(paymentRows[0].children[2].innerText).toEqual(tipPercent + '%');
        expect(paymentRows[0].children[3].innerText).toEqual('X');
    });

    it('should remove a payment table row when clicking on the delete button', () => {
        const paymentRows = paymentTbody.children;

        appendPaymentTable(createCurPayment());
        expect(paymentRows.length).toEqual(1);

        paymentRows[0].children[3].click();

        expect(paymentRows.length).toEqual(0);
    });

    it('should update the summary on updateSummary()', () => {
        allPayments = {
            'payment1': { billAmt: '100', tipAmt: '10', tipPercent: 10 },
            'payment2': { billAmt: bill, tipAmt: tip, tipPercent: tipPercent }
        };

        const sumBill = Number(allPayments.payment1.billAmt) + Number(allPayments.payment2.billAmt);
        const sumTip = Number(allPayments.payment1.tipAmt) + Number(allPayments.payment2.tipAmt);
        const avgTip = Math.round((allPayments.payment1.tipPercent + allPayments.payment2.tipPercent) / 2);

        updateSummary();

        expect(summaryTds[0].innerHTML).toEqual('$' + sumBill);
        expect(summaryTds[1].innerHTML).toEqual('$' + sumTip);
        expect(summaryTds[2].innerHTML).toEqual(avgTip + '%');
    });

    afterEach(() => {
        billAmtInput.value = "";
        tipAmtInput.value = "";

        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            summaryTds[i].innerHTML = "";
        }
    });
})
