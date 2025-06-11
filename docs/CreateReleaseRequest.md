# CreateReleaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **number** | 版本处理人ID | [optional] [default to undefined]
**Description** | **string** | 版本描述 | [optional] [default to undefined]
**IterationCodes** | **Array&lt;number&gt;** | 关联迭代code列表 | [optional] [default to undefined]
**LabelIds** | **Array&lt;number&gt;** | 标签ID列表 | [optional] [default to undefined]
**Name** | **string** | 版本名称 | [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**ReleaseDate** | **string** | 版本发布日期 | [optional] [default to undefined]
**StartDate** | **string** | 版本开始时间 | [optional] [default to undefined]

## Example

```typescript
import { CreateReleaseRequest } from './api';

const instance: CreateReleaseRequest = {
    Assignee,
    Description,
    IterationCodes,
    LabelIds,
    Name,
    ProjectName,
    ReleaseDate,
    StartDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
