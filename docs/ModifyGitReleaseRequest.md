# ModifyGitReleaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to undefined]
**Pre** | **boolean** | 是否预发布 | [optional] [default to undefined]
**ReleaseId** | **number** | 项目下仓库版本唯一标识符 | [default to undefined]
**TagName** | **string** | 标签名称 | [default to undefined]
**Title** | **string** | 标题 | [optional] [default to undefined]

## Example

```typescript
import { ModifyGitReleaseRequest } from './api';

const instance: ModifyGitReleaseRequest = {
    DepotId,
    DepotPath,
    Description,
    Pre,
    ReleaseId,
    TagName,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
