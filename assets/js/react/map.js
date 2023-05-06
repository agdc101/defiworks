export function resolveComponent(name)
{
    // if(name === 'Dummy') return import('./component/Dummy'); // Sample code
    if(name === 'DepositInputs') return import('./components/DepositInputs');
    if(name === 'WithdrawInputs') return import('./components/WithdrawInputs');

    throw 'Could not resolve React component "' + name + '"';
}