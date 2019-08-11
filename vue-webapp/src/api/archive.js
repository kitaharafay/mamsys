import qs from 'qs'
import service from '../utils/service'

export function getArchiveTreeAsync(id) {
  return service.get('/GetZLModuleTreeAsync.ashx', {
    params: {
      id: id
    }
  })
}

export function lockZLNode(data) {
  return service.post('/PostZLNodeLock.ashx', qs.stringify(data))
}

export function unlockZLNode(data) {
  return service.post('/PostZLNodeUnlock.ashx', qs.stringify(data))
}

export function addZLNode(data) {
  return service.post('/PostZLNodeAdd.ashx', qs.stringify(data))
}

export function deleteZLNode(data) {
  return service.post('/PostZLNodeDelete.ashx', qs.stringify(data))
}

export function modifyZLNode(data) {
  return service.post('/PostZLNodeModify.ashx', qs.stringify(data))
}
