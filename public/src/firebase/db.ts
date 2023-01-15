import { CollectionReference, collection, DocumentData } from 'firebase/firestore'
import { firestore } from './client'
import type { User } from './schema'

const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(firestore, collectionName) as CollectionReference<T>
}

export const UserCollection = createCollection<User>('users')
