# WikiData

wiki的具体信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanMaintain** | **boolean** | 是否为维护者 | [optional] [default to false]
**CanRead** | **boolean** | 是否可以阅读 | [optional] [default to false]
**Content** | **string** | 内容 | [optional] [default to '']
**CreatedAt** | **object** | 创建时间 | [optional] [default to undefined]
**Creator** | [**User**](User.md) |  | [optional] [default to undefined]
**CurrentVersion** | **number** | 当前versionId | [optional] [default to undefined]
**Editor** | [**User**](User.md) |  | [optional] [default to undefined]
**HistoriesCount** | **number** | 修改次数 | [optional] [default to undefined]
**HistoryId** | **number** | wiki历史Id | [optional] [default to undefined]
**Html** | **string** | 内容转成的html | [optional] [default to '']
**Id** | **number** | wikiId | [optional] [default to undefined]
**Iid** | **number** | wik的code | [optional] [default to undefined]
**LastVersion** | **number** | 最新versionId | [optional] [default to undefined]
**Msg** | **string** | 提交说明 | [optional] [default to '']
**Order** | **number** | 所处顺序位置 | [optional] [default to undefined]
**ParentIid** | **number** | 父级 IiD | [optional] [default to undefined]
**ParentShared** | **boolean** | 是否父级分享 | [optional] [default to false]
**ParentVisibleRange** | **string** | 父级可见范围 | [optional] [default to '']
**Path** | **string** | 路径 | [optional] [default to '']
**Title** | **string** | 标题 | [optional] [default to '']
**UpdatedAt** | **object** | 修改时间 | [optional] [default to undefined]
**VisibleRange** | **string** | 可见范围 | [optional] [default to '']

## Example

```typescript
import { WikiData } from './api';

const instance: WikiData = {
    CanMaintain,
    CanRead,
    Content,
    CreatedAt,
    Creator,
    CurrentVersion,
    Editor,
    HistoriesCount,
    HistoryId,
    Html,
    Id,
    Iid,
    LastVersion,
    Msg,
    Order,
    ParentIid,
    ParentShared,
    ParentVisibleRange,
    Path,
    Title,
    UpdatedAt,
    VisibleRange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
