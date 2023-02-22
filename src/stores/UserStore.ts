import {APIUser} from '@puyodead1/fosscord-api-types/v9';
import {action, makeObservable, observable} from 'mobx';
import BaseStore from './BaseStore';
import {DomainStore} from './DomainStore';
import User from './objects/User';

export default class UserStore extends BaseStore {
  private readonly domain: DomainStore;

  @observable private readonly users = observable.map<string, User>();

  constructor(domain: DomainStore) {
    super();
    this.domain = domain;

    makeObservable(this);
  }

  @action
  add(user: APIUser) {
    this.users.set(user.id, new User(this.domain, user));
  }

  @action
  remove(id: string) {
    this.users.delete(id);
  }

  get(id: string) {
    return this.users.get(id);
  }

  has(id: string) {
    return this.users.has(id);
  }

  asList() {
    return Array.from(this.users.values());
  }

  get size() {
    return this.users.size;
  }
}