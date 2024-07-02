document.getElementById('transaksi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    const confirmationMessage = `
        Terima kasih, ${nama}! Pesanan Anda untuk menginap dari tanggal ${checkin} hingga ${checkout} telah diterima. 
        Konfirmasi akan dikirim ke email Anda: ${email}.
    `;
    
    document.getElementById('confirmation').innerText = confirmationMessage;
});
