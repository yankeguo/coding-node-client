# DescribeGitReleaseDetailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**ReleaseId** | **number** | 版本序号Id | [optional] [default to undefined]
**TagName** | **string** | 标签名称 | [optional] [default to undefined]
**ShowResourceUrl** | **boolean** | 是否展示资源地址 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitReleaseDetailRequest } from './api';

const instance: DescribeGitReleaseDetailRequest = {
    DepotId,
    DepotPath,
    ReleaseId,
    TagName,
    ShowResourceUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
