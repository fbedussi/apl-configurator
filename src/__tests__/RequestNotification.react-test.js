import React from 'react';
import RequestNotification from '../components/RequestNotification';
import renderer from 'react-test-renderer';

const labels = {
        "back": "Indietro",
        "configurator": "Configuratore",
        "logoAlt": "torna al sito attraversamentipedonali.it",
        "logoDPowerAlt": "Attraversamento Pedonale Luminoso è un progetto D-power",
        "mandatory": "* campi obbligatori",
        "name": "Nome",
        "surname": "Cognome",
        "company": "Società (ragione sociale)",
        "address": "Indirizzo",
        "phone": "Telefono",
        "email": "E-mail",
        "website": "Sito",
        "reason": "Motivo della richiesta",
        "project": "Elaborazione progetto",
        "call": "Miglioria per gara d'appalto",
        "other": "Altro",
        "msg": "Eventuali informazioni aggiuntive",
        "submit": "Invia",
        "quotationBtn": "scopri quanto costa",
        "question": "domanda",
        "answer": "risposta",
        "thanks": "Grazie!",
        "requestSent": "Stiamo inviando la tua richiesta... attendi un attimo",
        "requestSuccess": "La vostra richiesta è stata inviata con successo",
        "requestError": "Purtroppo non siamo riusciti ad inviare la vostra richiesta, riprovate tra qualche minuto. Se il problema persiste vi preghiamo di segnalarcelo scrivendo a <a mailto=\"info@d-power.com\">info@d-power.com</a>.",
        "followUp": "Vi contatteremo al più presto",
        "linkHome": "Home page >",
        "homeUrl": "http://www.attraversamentipedonali.it/"
    };

test('RequestNotification component - unsent', () => {
  const requestStatus = 'unsnet';
  
  const component = renderer.create(
    <RequestNotification labels={labels} requestStatus={requestStatus} />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('RequestNotification component - sent', () => {
  const requestStatus = 'sent';

  const component = renderer.create(
    <RequestNotification labels={labels} requestStatus={requestStatus} />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('RequestNotification component - success', () => {
  const requestStatus = 'success';
  
  const component = renderer.create(
    <RequestNotification labels={labels} requestStatus={requestStatus} />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('RequestNotification component - error', () => {
  const requestStatus = 'error';
  
  const component = renderer.create(
    <RequestNotification labels={labels} requestStatus={requestStatus} />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});