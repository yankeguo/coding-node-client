# GitMergeRequest

Git合并请求信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 代码仓库的唯一编号 | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to '']
**IId** | **number** | 定位一个项目的内的资源的 ID | [optional] [default to undefined]
**MergeId** | **number** | 定位一个项目的内的MR资源的 ID | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]

## Example

```typescript
import { GitMergeRequest } from './api';

const instance: GitMergeRequest = {
    DepotId,
    DepotPath,
    IId,
    MergeId,
    ProjectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
