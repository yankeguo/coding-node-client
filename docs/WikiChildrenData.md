# WikiChildrenData

wiki自页面列表信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 内容 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Creator** | [**User**](User.md) |  | [optional] [default to undefined]
**Editor** | [**User**](User.md) |  | [optional] [default to undefined]
**Id** | **number** | wiki Id | [optional] [default to undefined]
**Iid** | **number** | wiki编号 | [optional] [default to undefined]
**IsShared** | **boolean** | 是否分享 | [optional] [default to false]
**IsTreeShared** | **boolean** | 是否整树分享 | [optional] [default to false]
**Order** | **number** | 所处顺序位置 | [optional] [default to undefined]
**ParentIid** | **number** | 父级编号 | [optional] [default to undefined]
**Title** | **string** | 标题 | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]
**VisibleRange** | **string** | 可见范围 | [optional] [default to '']

## Example

```typescript
import { WikiChildrenData } from './api';

const instance: WikiChildrenData = {
    Content,
    CreatedAt,
    Creator,
    Editor,
    Id,
    Iid,
    IsShared,
    IsTreeShared,
    Order,
    ParentIid,
    Title,
    UpdatedAt,
    VisibleRange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
