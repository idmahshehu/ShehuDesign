import React from 'react';
import ClientList3D from './ClientList3D';
import ClientHeadingMask from './ClientHeadingMask';
import ClientDots from './ClientDots';

const clients = [
  { name: 'Ford', desc: 'Working on the Next-Generation HMI Experience without no driving experience.' },
  { name: 'UFC', desc: 'Developed the Future of UFC Sports Ecosystem despite not being a sports fan.' },
  { name: 'Lincoln', desc: 'Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.' },
  { name: 'Royal caribbean', desc: 'I was just one person on a massive team that created an entire Royal Caribbean eco-system.' },
  { name: 'SleepiQ', desc: 'Designed a 1M+ users product utilizing my best personal experience: sleeping.' },
  { name: 'NFL', desc: 'Explored the Future of Fantasy Football while being in a country where football means a total different sport.' },
];

const ClientList = () => {
  return (
    <div className="client_list">
      <ClientList3D />
      <div className="client_list_inner">
        {clients.map((client, index) => (
          <ClientHeadingMask key={index} name={client.name} desc={client.desc} />
        ))}
        <ClientDots />
      </div>
    </div>
  );
};

export default ClientList;
