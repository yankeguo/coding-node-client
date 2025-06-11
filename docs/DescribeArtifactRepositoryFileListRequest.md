# DescribeArtifactRepositoryFileListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Artifacts** | [**Array&lt;SpecifiedArtifact&gt;**](SpecifiedArtifact.md) | 指定的制品 | [optional] [default to undefined]
**ContinuationToken** | **string** | 翻页符。每次 list 操作会返回 ContinuationToken，在下一次 list 传入该值，即可接续上次 list 内容进行 list，最后一页该字段为空 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示条数 | [optional] [default to undefined]
**Project** | **string** | 项目名称 | [optional] [default to undefined]
**Repository** | **string** | 仓库名 | [optional] [default to undefined]

## Example

```typescript
import { DescribeArtifactRepositoryFileListRequest } from './api';

const instance: DescribeArtifactRepositoryFileListRequest = {
    Artifacts,
    ContinuationToken,
    PageSize,
    Project,
    Repository,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
