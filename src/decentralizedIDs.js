'use strict'

export function makeDIDFromPublicKey(publicKey) {
  return `did:ecdsa-pub:${publicKey}`
}

export function makeDIDFromAddress(address) {
  return `did:btc-addr:${address}`
}

export function getPublicKeyOrAddressFromDID(did) {
  const didParts = did.split(':')

  if (didParts.length !== 3) {
    throw new InvalidDIDError('Decentralized IDs must have 3 parts')
  }

  if (didParts[0].toLowerCase() !== 'did') {
    throw new InvalidDIDError('Decentralized IDs must start with "did"')
  }

  if (didParts[1].toLowerCase() === 'ecdsa-pub') {
    return didParts[2]
  } else if (didParts[1].toLowerCase() === 'btc-addr') {
    return didParts[2]
  } else {
    throw new InvalidDIDError('Decentralized ID format not supported')
  }
}