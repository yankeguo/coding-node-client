# DescribeGitTagsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**KeyWord** | **string** | TagName的模糊查询关键字 | [optional] [default to undefined]
**Page** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页数量 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitTagsRequest } from './api';

const instance: DescribeGitTagsRequest = {
    DepotId,
    DepotPath,
    KeyWord,
    Page,
    PageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
