const cards = [
      {header: 'Xbox Series X', Image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-FY23HOL?wid=380&hei=213&fit=crop', description: `Give thrills that’ll last all year with the fastest, most powerful Xbox ever.`, links: ['']}
    , {header: 'Up to $203 off Surface Laptop Go 2 Bundle',Image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bundles-Surface-Laptop-Go-2-Mobile-Mouse-Complete-FY23HOL?wid=380&hei=213&fit=crop', description: `Get an unreal deal on Surface Laptop Go 2, Surface Mobile Mouse, and a 3-year Microsoft Complete Protection Plan. Offer ends 12/04.`, links: ['']}
    , {header: 'Up to $400 off select Surface Laptop Studio', Image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-Studio-FY23HOL?wid=380&hei=213&fit=crop', description: `Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform make this the perfect gift. Offer ends 12/2.`, links: ['']}
    , {header: 'Save $503 on Surface Laptop 4 Bundle', Image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bundles-Surface-Laptop-4-Pen-Complete-FY23HOL?wid=380&hei=213&fit=crop', description: `Save now on the style, speed, and performance of Surface Laptop 4, plus Surface Pen and 3 years of Microsoft Complete Protection Plan. Offer ends 12/11`, links: ['']}
]

for (let i = 0; i < cards.length; i++){
 console.log(cards[i].Image);
  let carDiv = document.createElement('div');
  let header = document.createElement('h2');
  header.textContent = cards[i].header;
  carDiv.append(header);
  
  
  let Image = document.createElement('img');
  Image.src = cards[i].Image;
  carDiv.append(Image);

  let description = document.createElement('p');
  description.textContent = cards[i].description;
  carDiv.append(description);



document.querySelector('.products').append(carDiv);
}




