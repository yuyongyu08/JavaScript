let needLoginRouters = [
    '/homepage',
    '/myCash',
    '/myDiscount',
    '/mySubsidy',
    '/brokerSubsidy',
    '/ticketCenter'
];

if(needLoginRouters.find((item) => {return '/homepage' == item})){
    console.log('right');
}else {
    console.log('err');
}
