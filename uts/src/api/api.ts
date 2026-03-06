const BASE_URL = '/api'

export async function getBooksRequest() {
    const response = await fetch(`${BASE_URL}/buku`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();

    return data;
}

export async function getBookDetailRequest(id: string) {
    const response = await fetch(`${BASE_URL}/buku/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    console.log(data);

    return data;
}

export async function borrowRequest(nama: string, id: string) {

    const response = await fetch(`${BASE_URL}/buku/${id}/pinjam`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "peminjam": {
                nama
            }
        })
    })

    const data = await response.json();
    
    return data;
}

export async function updateBookRequest(id: string, judul: string, deskripsi: string, tahun: string, kategori: string) {

    const response = await fetch(`${BASE_URL}/buku/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "data": {
                judul,
                deskripsi,
                tahun,
                kategori
            }
        })
    })

    const data = await response.json();
    
    return data;
}

export async function returnBookRequest(id: string) {
    const response = await fetch(`${BASE_URL}/buku/${id}/balik`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }
    })

    const data = await response.json();
    
    return data;
}

