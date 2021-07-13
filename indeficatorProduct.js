// Вам нужно написать код, который будет возвращать идентификатор продукта из строки, 
// представляющей URL-адрес страницы этого продукта в вашем интернет-магазине. 
// Все URL-адреса отформатированы одинаково, сначала это домен exampleshop.com, 
// затем это название продукта, разделенное тире (-), затем буква 'p', 
// указывающая на начало идентификатора продукта, 
// затем фактический идентификатор (без ограничения по длине) и, наконец, 
// цифровое представление даты добавления продукта, за которой следует 'html'. 
// Ваш код должен возвращать идентификатор продукта в виде строки. 
// Идентификатор может содержать цифры, строчные и прописные буквы.


// Пример кода:
// getProductId('http://www.exampleshop.com/fancy-coffee-cup-p-90764-12052019.html') => '90764'
// getProductId('http://www.exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html') => '147'
// getProductId('http://www.exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html') => '942312798'
// getProductId('http://www.exampleshop.com/big-dig-p-12312ap3-01041998.html') => '12312ap3'
// getProductId('http://www.exampleshop.com/little-cat-p-23ASH23-01032021.html') => '23ASH23'

// (?<=-p-)([\s\S]+?)(?=-)

const getProductId = (s)=>s.match(/(?<=-p-)([\s\S]+?)(?=-)/g)[0]

const res = getProductId("http://www.exampleshop.com/fancy-coffee-cup-p-90764-12052019.html")
console.log('---res', res)