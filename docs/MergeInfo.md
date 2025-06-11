# MergeInfo

合并请求详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**MergeRequestId** | **number** | 合并请求id | [optional] [default to undefined]
**MergeRequestInfo** | [**MergeRequestInfo**](MergeRequestInfo.md) |  | [optional] [default to undefined]
**MergeRequestUrl** | **string** | 合并请求URl | [optional] [default to '']
**ProjectId** | **number** | 项目id | [optional] [default to undefined]

## Example

```typescript
import { MergeInfo } from './api';

const instance: MergeInfo = {
    DepotId,
    MergeRequestId,
    MergeRequestInfo,
    MergeRequestUrl,
    ProjectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
